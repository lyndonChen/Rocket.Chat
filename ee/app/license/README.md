
## Generating licenses

On your terminal run:

```
node generateLicense.js \
"open.rocket.chat" \
"2048-01-01" \
"auditing,anyother" \
"200"
```

Where:

* `open.rocket.chat` is the URL(s) allowed to use the license. Can be an wildcard, i.e.: `*.rocket.chat`
* `2048-01-01` is the expire date of the license
* `auditing,anyother` are the modules the license will allow to use
* `200` is the number of the maximum number of active users on the server (Optional)
