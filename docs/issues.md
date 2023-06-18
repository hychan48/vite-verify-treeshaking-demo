# Issues

```yaml
# .github/workflows/deploy.yml
- name: Install dependencies
  run: pnpm install
```
```
ERR_PNPM_LOCKFILE_CONFIG_MISMATCH Cannot proceed with the frozen installation. 
The current "settings.autoInstallPeers" configuration doesn't match the value found in the lockfile

Update your lockfile using "pnpm install --no-frozen-lockfile"
Error: Process completed with exit code 1
```
