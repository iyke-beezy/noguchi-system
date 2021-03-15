
'use strict';


     
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const { find } = require('../../org-admin/controllers/org-admin');
module.exports = {
         /**
          * Create a record.
          *
          * @return {Object}
          */  
         /* async create(ctx) {
           console.log(ctx.request.body);
           let entity;
           if (ctx.is('multipart')) {
             const { data, files } = parseMultipartData(ctx);
             data.users_permissions_user = ctx.state.user.id;
             entity = await strapi.services.forum.create(data, { files });
           } else {
             ctx.request.body.author = ctx.state.user.id;
             console.log(ctx.request.body);
             entity = await strapi.services.forum.create(ctx.request.body);
           }
           return sanitizeEntity(entity, { model: strapi.models.forum });
         },

         async update(ctx) {
           const { id } = ctx.params;
       
           let entity;
       
           const [forum] = await strapi.services.forum.find({
             id: ctx.params.id,
             'author.id': ctx.state.user.id,
           });
       
           if (!forum) {
             return ctx.unauthorized(`You can't update this entry`);
           }
       
           if (ctx.is('multipart')) {
             const { data, files } = parseMultipartData(ctx);
             entity = await strapi.services.forum.update({ id }, data, {
               files,
             });
           } else {
             entity = await strapi.services.forum.update({ id }, ctx.request.body);
           }
       
           return sanitizeEntity(entity, { model: strapi.models.forum });
         },

         async delete(ctx) {
            const { id } = ctx.params;
        
            let entity;
        
            const [forum] = await strapi.services.forum.find({
              id: ctx.params.id,
              'author.id': ctx.state.user.id,
            });
        
            if (!forum) {
              return ctx.unauthorized(`You can't delete this entry`);
            }
        
            if (ctx.is('multipart')) {
              const { data, files } = parseMultipartData(ctx);
              entity = await strapi.services.forum.delete({ id }, data, {
                files,
              });
            } else {
              entity = await strapi.services.forum.delete({ id }, ctx.request.body);
            }
        
            return sanitizeEntity(entity, { model: strapi.models.forum });
          }, */
};
   

 
