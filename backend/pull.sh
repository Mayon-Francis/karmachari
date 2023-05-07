cd /app
echo "[$(date)]: Pulling Backend"
previous_commit_hash=`git rev-parse HEAD`
git fetch origin $GIT_BRANCH
current_commit_hash=`git rev-parse origin/$GIT_BRANCH`
echo "[$(date)]: Previous commit hash: $previous_commit_hash"
echo "[$(date)]: Current commit hash: $current_commit_hash"
git reset --hard origin/$GIT_BRANCH

isDiff=$(git diff --name-only $current_commit_hash $previous_commit_hash backend)
echo "isDiff=$isDiff"
if [ -z "$isDiff" ]; then
    echo "[$(date)]: There is no change in source code. Skipping re build."
else
    echo "[$(date)]: There is git diff. Proceeding with build"
    cd /app/backend
    npm install
    pm2 restart ecosystem.config.js --only app
fi
echo "[$(date)]: Pulling Backend Completed"