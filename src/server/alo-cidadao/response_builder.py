from flask import jsonify, make_response


def build_response(message, code):
    response = make_response(
        jsonify(
            {"message": message}
        ),
        code,
    )
    response.headers["Content-Type"] = "application/json"
    return response
