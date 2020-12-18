'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');


module.exports = {
    async create(ctx) {
        console.log(ctx.request.body);
        let entity;
        const [survey] = await strapi.services.survey.find({
            'disease':ctx.state.disease,
            'id': ctx.state.survey,
          });
        const [answer] = await strapi.services.answer.find({
            id: ctx.params.id,
            'users_permissions_user.id': ctx.state.user.id,
            'survey':survey.id
          });
          if (answer) {
            return ctx.unauthorized(`You can't answer twice`);
          }
        if (ctx.is('multipart')) {
          const { data, files } = parseMultipartData(ctx);
          data.users_permissions_user = ctx.state.user.id;
          entity = await strapi.services.answer.create(data, { files });
        } else {
          ctx.request.body.users_permissions_user = ctx.state.user.id;
          console.log(ctx.request.body);
          entity = await strapi.services.answer.create(ctx.request.body);
        }
        return sanitizeEntity(entity, { model: strapi.models.answer });
      },
};
