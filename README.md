# @crosstabs/minimatch-compat

ESLint 9, its config packages and the import, jsx-a11y and react plugins
depend on `minimatch@3`, which GHSA-g3hv-75wg-m249 (globparts amplification
denial of service) leaves unpatched below 11.0.1. Those packages call the
CommonJS export directly as `minimatch(path, pattern, options)` or import it
as a default, while minimatch 11 only exposes named exports.

This package re-exports patched minimatch 11 as a callable default with the
named exports still attached. Crosstabs root `overrides` maps every
`minimatch@<11.0.1` to it. It lives in its own repository and is installed as a pinned
GitHub dependency because npm resolves local `file:` override targets
relative to each nested consumer, which breaks installs.
