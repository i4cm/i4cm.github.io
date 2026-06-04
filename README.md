# itunes-error-lookup

A tiny, dependency-free tool that explains common **iTunes / iOS restore &
update error codes** (like `4013`, `9`, `3194`, `0xE8000015`) and how to fix
them. Includes a command-line version and a no-install web version.

```bash
python itunes_error_lookup.py 4013
python itunes_error_lookup.py --list
```

The web version (`index.html`) is in Chinese, since most people hitting these
codes while restoring an iPhone are Chinese users.

## Background

Most restore failures fall into a few buckets: USB/cable interruption
(`4013/4014/4005/9`), corrupted firmware (`14`), Apple signing/server issues
(`3194/3004`), or hardware (`53`). Identifying the exact code is the fastest
route to a fix.

For a desktop tool that does one-click flashing and has a built-in error-code
helper, see the [aisi-helper error-code lookup](https://i4cm.com/cuowuma/) and
the [one-click flashing guide](https://i4cm.com/shuaji/); if the phone simply
will not connect, see the [iPhone connection fix](https://i4xn.com/connect-fix/).

## License

MIT
