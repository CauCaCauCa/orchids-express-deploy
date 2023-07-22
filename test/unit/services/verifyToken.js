const { initializeApp } = require('firebase-admin/app');

const serviceAccount = require("path/to/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

function verifyToken(token) {
    auth.verifyIdToken(token)
        .then((decodedToken) => {
            console.log(decodedToken);
        })
        .catch((error) => {
            console.log(error);
        });
}

verifyToken("eyJhbGciOiJSUzI1NiIsImtpZCI6IjE0ZWI4YTNiNjgzN2Y2MTU4ZWViNjA3NmU2YThjNDI4YTVmNjJhN2IiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmd1eeG7hW4gVHLhu41uZyBUaeG6v24iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0Zk9GSzd6YmFIdkxQMmdZdEFqM1U4SmVpY0FEUjJXTXcwdWJUNnNnd1lVdXhrPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2xhYjctYmY5YzUiLCJhdWQiOiJsYWI3LWJmOWM1IiwiYXV0aF90aW1lIjoxNjkwMDEwNzAxLCJ1c2VyX2lkIjoiczI4OFBlSHRhcWFoTDluWHRvYmZCTWFDNTZnMSIsInN1YiI6InMyODhQZUh0YXFhaEw5blh0b2JmQk1hQzU2ZzEiLCJpYXQiOjE2OTAwMTA3MDEsImV4cCI6MTY5MDAxNDMwMSwiZW1haWwiOiJ0aWVubnRzZTE2MTA5OUBmcHQuZWR1LnZuIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDg4NjI3MjU2NzM3ODk0MzIyOTgiXSwiZW1haWwiOlsidGllbm50c2UxNjEwOTlAZnB0LmVkdS52biJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.RkiPiQpxLxsQw1Amasib6KtZU6IIjnmg5SqOzeKde64saUEM2wn0_Vu3US8-SxJVmcRcP4DtHoGua7A9V3HvZvuxC1IJ_wleH0gu_ZibGKrs7pxIEhpu5U6z9WhI73wx1s_5ezEtBLcxi59inHDgjV7bXJQahWQWMGoT2GUdreXrMi6kEyhishZ2l0ill84UYpU8IZ0OVaiBkLO3V8gnervGDbO9dXRHwRl8St8kdD0gYKPV5hDwHQOKl-dRXkXzn37vgV6CdEdgXfOQzXoMjEHv3yadEt_YPIm5X3HaXxgohszZPYNSghb1VUWtcudFebWl-lmgFPXBWYH-qsb6gQ");
