# 🚀 Déploiement d'une application Next.js avec Nginx et HTTPS sur un VPS Debian (OVH)

## Prérequis

- Un nom de domaine pointant vers ton VPS
- Une application Next.js prête à être déployée
- Accès SSH en root à ton VPS Debian

---

## 1. Mise à jour du système

```bash
sudo apt update && sudo apt upgrade -y
```

---

## 2. Installation des outils nécessaires

```bash
sudo apt install nginx ufw curl git -y
```

---

## 3. Suppression d’Apache (optionnel mais recommandé)

```bash
sudo systemctl stop apache2
sudo systemctl disable apache2
sudo apt remove apache2 apache2-utils apache2-bin apache2.2-common -y
sudo apt purge apache2* -y
sudo apt autoremove -y
```

---

## 4. Configuration du pare-feu

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
sudo ufw status
```

---

## 5. Déploiement de l’application Next.js

```bash
git clone https://github.com/ton-org/ton-projet.git ~/app
cd ~/app
pnpm install
pnpm build
```

### Lancer avec PM2

```bash
npm install -g pm2
pm2 start "pnpm start" --name nextapp
pm2 startup
pm2 save
```

---

## 6. Configuration de Nginx (reverse proxy)

### Fichier à créer :

```bash
sudo nano /etc/nginx/sites-available/mon-site
```

### Contenu du fichier :

```nginx
server {
    listen 80;
    server_name mon-domaine.fr www.mon-domaine.fr;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /api/ {
        proxy_pass http://localhost:3333/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }
}
```

### Activation :

```bash
sudo ln -s /etc/nginx/sites-available/mon-site /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 7. HTTPS avec Let’s Encrypt (Certbot)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d mon-domaine.fr -d www.mon-domaine.fr
```

---

## 8. Résumé des ports ouverts

| Port | Usage              | Ouvert depuis l’extérieur |
|------|--------------------|----------------------------|
| 22   | SSH                | ✅                         |
| 80   | HTTP (Let's Encrypt)| ✅                         |
| 443  | HTTPS              | ✅                         |
| 3000 | Next.js app        | ❌ (local seulement)       |
| 3333 | Back-end API       | ❌ (local seulement)       |

---

## 9. Vérification finale

- Visite `https://mon-domaine.fr` → ton site Next.js s'affiche en HTTPS
- Les requêtes vers `/api/...` sont redirigées vers le port 3333 (back-end local)
