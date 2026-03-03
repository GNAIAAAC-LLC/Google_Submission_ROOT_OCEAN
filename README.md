#

# >>>>> HOW TO FIX THE 'ENOTEMPTY' INSTALLATION

#

#

###

#

-# You are repeatedly seeing an `ENOTEMPTY` error

-#

# This error is **NOT** a code problem. It is an

-#

- # **No changes I make to the code will fix this.*

+# If you are seeing an `ENOTEMPTY` error, your lo +#

directory is in a corrupted state. This is not

--#

To fix this, you **MUST** run the following com

+# To fix this, you MUST run the following command

#

# 1. `rm -rf node_modules`

#

--# 2.

`rm -f package-lock.json`(or `del package-

+# 2.

`rm -f pnpm-lock.yaml`(or `del pnpm-lock.y

#

# 3.

`pnpm install`

#

-# You must use `pnpm install`.

-#

# If you do not have `pnpm installed, you can in

-#

-# The project is configured to block `npm install

+# You must use pnpm install`. This project is co +#

to prevent this error from happening.