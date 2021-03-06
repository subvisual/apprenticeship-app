Apprenticeship App [![Build Status](https://travis-ci.org/subvisual/apprenticeship-app.svg)](https://travis-ci.org/subvisual/apprenticeship-app)
==================

<p align="center">
  <img src=".apprenticeship.png" alt="Apprenticeship Logo">
</p>

Getting Started
---------------

Before running meteor create a file `settings.json` in the root of the project with the following structure:

```json
{
  "headquarters": {
    "appId": "",
    "secret": ""
  },
  "email": {
    "username": "",
    "password": ""
  }
}
```

Remember to fill in the settings with the correct information.
To start the application run `meteor --settings settings.json`.

API
---

Part of the responsability of the apprenticeship-app is to expose an api for the rest of the company's applications to use.
The purpose of this api is to save applications.

There is only one endpoint available at the moment.
The following is the accepted method and url followed by the json object it recognises.

```
METHOD: POST
URL: HOST_URL/api/applications
```

```json
{
    "name": "John Snow",
    "email": "johnsnow@subvisual.com",
    "phoneNumber": "911111111",
    "other": [{
      "question": "What do you like to do?",
      "answer": "Kill wildlings!"
    },{
      "question": "What do you know?",
      "answer": "Nothing."
    }]
}
```

Changing the Settings
--------------------------

After changing the `settings.json` file you need to recompile `secrets.tar.enc`, so that travis doesn't break when testing.
First install travis cli:

```
get install travis
```

After the installation you need to login to travis:

```
travis login
```

When you're done start by compressing the settings file:

```
tar cvf secrets.tar settings.json
```

When your done encrypt the compressed file

```
travis encrypt-file secrets.tar --add
```

Make sure there isn't a duplication with the openssl command in `.travis.yml`.
Figure out what changed and remove accordingly.

Commit both `.travis.yml` and `.secrets.tar.enc`.
**NEVER** commit the `secrets.tar` file.
