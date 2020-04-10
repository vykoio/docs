---
id: overview
title: Overview
sidebar_label: Overview
---

### Schema

All API access is via **HTTPs** and the base path of the URL is `https://api.vyko.io`. It is important to note that the API body format \(both receiving and sending\) is in **JSON**. Therefore, it is reccomended to set the `Content-Type` header to `application/json`.

Timestamps are represented as **miliseconds** \(not seconds like unix systems\) since the epoch \(January 1, 1970 at 00:00:00 GMT\).

## Authentication

For obvious reasons, many of our endpoints will return sensitive information regarding client's data. For this reason, we've devised a secure authentication scheme that is required for many requests.

You can generate your API tokens within your dashboard and must include them in the request body under the key `token` or, alternatively, you may also specify the token within the `Authorization` \***\*header of type `bearer`**.\*\*

**See below for examples for both methods.**

### Header \(reccomended\)

Example:

```text
Authorization: Bearer <your generated token here>
```

### Request Body

For `POST` requests for example:

```javascript
{
    //Your request body would go here
    "token": "<your generated token here>"
}
```

`GET` requests obviously do not have a JSON body. So, you must include it in the query params instead. For example:

```text
https://api.vyko.io/endpoint?token=yourgeneratedtoken
```
