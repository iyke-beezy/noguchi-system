
'use strict';


     
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
module.exports = {
         /**
          * Create a record.
          *
          * @return {Object}
          */
         async create(ctx) {
           console.log(ctx.request.body);
           let entity;
           if (ctx.is('multipart')) {
             const { data, files } = parseMultipartData(ctx);
             data.users_permissions_user = ctx.state.user.id;
             entity = await strapi.services.reply.create(data, { files });
           } else {
             ctx.request.body.users_permissions_user = ctx.state.user.id;
             console.log(ctx.request.body);
             entity = await strapi.services.reply.create(ctx.request.body);
           }
           return sanitizeEntity(entity, { model: strapi.models.reply });
         },

         async update(ctx) {
           const { id } = ctx.params;
       
           let entity;
       
           const [reply] = await strapi.services.reply.find({
             id: ctx.params.id,
             'users_permissions_user.id': ctx.state.user.id,
           });
       
           if (!reply) {
             return ctx.unauthorized(`You can't update this entry`);
           }
       
           if (ctx.is('multipart')) {
             const { data, files } = parseMultipartData(ctx);
             entity = await strapi.services.reply.update({ id }, data, {
               files,
             });
           } else {
             entity = await strapi.services.reply.update({ id }, ctx.request.body);
           }
       
           return sanitizeEntity(entity, { model: strapi.models.reply });
         },

         async delete(ctx) {
            const { id } = ctx.params;
        
            let entity;
        
            const [reply] = await strapi.services.reply.find({
              id: ctx.params.id,
              'users_permissions_user.id': ctx.state.user.id,
            });
        
            if (!reply) {
              return ctx.unauthorized(`You can't delete this entry`);
            }
        
            if (ctx.is('multipart')) {
              const { data, files } = parseMultipartData(ctx);
              entity = await strapi.services.reply.delete({ id }, data, {
                files,
              });
            } else {
              entity = await strapi.services.reply.delete({ id }, ctx.request.body);
            }
        
            return sanitizeEntity(entity, { model: strapi.models.reply });
          },
};
   

 
