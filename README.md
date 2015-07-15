Apprenticeship App
==================

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
