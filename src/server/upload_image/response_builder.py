from flask import jsonify, make_response, json


def build_response(body, code, content_type="application/json"):
    if content_type == "application/json":
        response_body = json.dumps(body)
    else:
        response_body = body

    response = make_response(
        response_body,
        code,
    )

    response.headers["Content-Type"] = content_type
    return response
