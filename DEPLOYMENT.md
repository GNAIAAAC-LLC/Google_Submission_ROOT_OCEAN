## How to fix the "ENOTEMPTY" installation error (NPM)

If you see an `ENOTEMPTY` error during install/build, your workspace dependency state is corrupted.
This is not a Next.js code issue.

### Fix (Linux / Firebase Studio / Cloud Workstations)

1) Remove dependency + build caches:
```bash
rm -rf node_modules .next
rm -f package-lock.json