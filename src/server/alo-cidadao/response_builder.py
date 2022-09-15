from flask import jsonify, make_response


def build_response(body, code):
    response = make_response(
        jsonify(
            body
        ),
        code,
    )
    response.headers["Content-Type"] = "application/json"
    return response
