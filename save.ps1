if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Host Git is missing. Download it. -ForegroundColor Red
  exit 1
}

$message = Read-Host -Prompt "Message"


Write-Host Pulling from Git... -ForegroundColor Green
git pull
git add *
Write-Host Committing... -ForegroundColor Green
git commit -m "$message"
Write-Host Pushing to GitHub... -ForegroundColor Green
git push

Write-Host Done. -ForegroundColor Blue
