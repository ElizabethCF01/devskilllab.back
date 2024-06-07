'use strict';

/**
 * code-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::code-project.code-project');
