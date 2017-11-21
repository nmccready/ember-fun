import Ember from "ember";

function isInArray(array, item){
  return array.indexOf(item) >= 0;
}

function compute(itemKey, listKey) {
  return Ember.computed(itemKey, `${listKey}.[]`, function() {
    return isInArray(this.get(listKey), this.get(itemKey));
  });
}

export {
  isInArray,
  compute
}