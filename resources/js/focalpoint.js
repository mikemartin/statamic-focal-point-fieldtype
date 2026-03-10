import FocalPointFieldtype from './FocalPointFieldtype.vue';

Statamic.booting(() => {
    Statamic.$components.register('focal_point-fieldtype', FocalPointFieldtype);
});
