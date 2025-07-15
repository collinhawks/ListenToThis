#!/bin/bash

echo "📥 Syncing music from Google Drive using rclone..."
rclone sync gdrive:Navidrome /music

echo "🎵 Starting Navidrome..."
exec /app/navidrome
