Api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true
});

Api.addRoute('applications', {
  post: {
    action: function() { return tryAction(insertSubmission, this.bodyParams); }
  }
});

function tryAction(fn, bodyParams) {
  try {
    return fn(bodyParams);
  } catch (e) {
    if (e.invalidKeys)
      return invalidKeysHandler(e);
    else
      console.log(e);
  }
}

function insertSubmission(params) {
  let url = gravatarForEmail(params.email);

  if (url)
    _.extend(params, { pictureUrl: url });

  Applications.insert(params);

  return {
    statusCode: 201
  };
}

function invalidKeysHandler(e) {
  console.log(e);

  return {
    invalidKeys: e.invalidKeys,
    message: e.sanitizedError.message,
    reason: e.sanitizedError.reason,
    statusCode: 400,
  };
}

function gravatarForEmail(email) {
  return Gravatar.imageUrl(email, {
      size: 200,
      default: 'mm'
  });
}
