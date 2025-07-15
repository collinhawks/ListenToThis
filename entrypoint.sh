#!/bin/bash

echo "🔐 Linking Render secret file to rclone config..."
mkdir -p /root/.config/rclone
ln -sf /etc/secrets/rclone.conf /root/.config/rclone/rclone.conf

echo "📥 Syncing music from cloud with rclone..."
rclone sync dropbox:Navidrome /music

echo "🎵 Starting Navidrome..."
exec /app/navidrome
