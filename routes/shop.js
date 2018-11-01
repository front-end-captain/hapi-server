const Joi = require("joi");

const GROUP_NAME = "shops";

module.exports = [
  {
    method: "GET",
    path: `/${GROUP_NAME}`,
    handler: async (request, h) => {
      return {
        status: 1,
        message: "success",
        data: [{ name: "viking", age: 18 }, { name: "Tom", age: 20 }],
      };
    },
    config: {
      tags: ["api", GROUP_NAME],
      description: "获取店铺列表",
    },
  },
  {
    method: "GET",
    path: `/${GROUP_NAME}/{shopId}/goods`,
    handler: async (request, h) => {
      return {};
    },
    config: {
      tags: ["api", GROUP_NAME],
      description: "获取店铺的商品列表",
      validate: {
        params: {
          shopId: Joi.string().required(),
        },
        headers: Joi.object({
          authorization: Joi.string().required(),
        }).unknown(),
      },
    },
  },
];
