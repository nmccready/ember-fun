import DS from 'ember-data';
import Inflector from 'ember-inflector';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, modelClass, payload,
    id, requestType) {

    let tlk;
    switch (requestType) {
      case 'query':
        tlk = Inflector.inflector.pluralize(modelClass.modelName);
        payload = payload.map((rawItem) => {
          rawItem.oldId = rawItem.id;
          rawItem.id = rawItem.login || rawItem.name;
          return rawItem;
        });
        break;
      case 'queryRecord':
        tlk = Inflector.inflector.singularize(modelClass.modelName);
        payload.oldId = payload.id;
        payload.id = payload.login || payload.name;
        break;
      default:
        break;
    }

    return this._super(store, modelClass,
      { [`${tlk}`]: payload }, id, requestType);
  }
});
