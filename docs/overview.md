---
id: overview
title: Overview
sidebar_label: Overview
---

If you have any issues or further questions, please don't hesitate to contact our [support team](https://vyko.io/support).

## Schema

All API access is via **HTTPs** and the base path of the URL is `https://api.vyko.io`. It is important to note that the API body format \(both receiving and sending\) is in **JSON**. Therefore, it is reccomended to set the `Content-Type` header to `application/json`.

Timestamps are represented as **miliseconds** \(not seconds like unix systems\) since the epoch \(January 1, 1970 at 00:00:00 GMT\).

## Authentication

For obvious reasons, many of our endpoints will return sensitive information regarding client's data. For this reason, we've devised a secure authentication scheme that is required for the majority of requests.

You can generate your API tokens within your dashboard and must include them in the request body under the key `token` or, alternatively, you may also specify the token within the `Authorization` header of type **`bearer`.**

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

## Rate Limits

To prevent abuse of our systems and make sure all client's requests can be handled fairly, we've imposed some fair rate limits for all of our users. Premium users have increased limits the higher the plan. You can check your rate limits via the headers that are returned in each request:

| Header                  | Description                                                                                               |
| :---------------------- | :-------------------------------------------------------------------------------------------------------- |
| `X-RateLimit-Limit`     | The maximum amount of requests the user can make to the specific endpoint before rate limits are imposed. |
| `X-RateLimit-Remaining` | How many requests the user is able to make before they reach the endpoint specific limit.                 |
| `X-RateLimit-Reset`     | How much time the user has \(in seconds\) before the current count of requests is reset back to 0.        |

## Status Codes

Our API will return different status codes based on the success of the actions the user is attempting to perform via the endpoints they are requesting.

This has been done so the user is returned with an error, they can determine what may have gone wrong.

These remain the same for all request types \(GET, POST, PUT/PATCH and DELETE\) to avoid confusion.

| Status Code | Description                                                                                                          |
| :---------- | :------------------------------------------------------------------------------------------------------------------- |
| 200         | The request was successful.                                                                                          |
| 401         | The endpoint requested required authentication and such credentials have either not been provided or are invalid.    |
| 409         | The resource the user is attempting to create already exists and thus a conflict has arisen.                         |
| 404         | The endpoint requested could not be found.                                                                           |
| 418         | The tea's ready :\)                                                                                                  |
| 429         | The user has made too many requests in the endpoint specific allotted timespan. Rate limiting has now been enforced. |

Any other response codes are as per [HTTP specification](https://tools.ietf.org/html/rfc7231).

## Languages

We're trying to provide our platform in as many languages as possible. If you're willing to help us and receive special rewards, see our [GitHub repository](https://github.com/vykoio/translations) for more information.

As for setting your chosen language when making requests to our API, this can be done quite easily.

By default, our system will check the request's `Accept-Language` header and determine the best _available_ language to respond in. However, if you want to change this, this can be done in the request body (with POST requests and such) or within the request query parameters.

Please provide the desired language in a [two letter language (ISO 639-1) code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

Example Request Body:

```javascript
{
    //Your request body would go here
    "language": "ko"
}
```

Example Query Param:

`https://api.vyko.io/inbox?language=ko`
