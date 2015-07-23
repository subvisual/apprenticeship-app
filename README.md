Apprenticeship App
==================

Getting Started
---------------

Before running meteor create a file `settings.json` in the root of the project with the following structure:

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

Remember to fill in the settings with the correct information.
To start the application run `meteor --settings settings.json`.

API
---

This application allows others to submit user applications trough an API.


METHOD: `POST`
URL: `HOST_URL/api/applications`
JSON_DATA:

```
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
