export
default {
    renderMyTemplate: function(id, inputTemplate, data) {
        var templateOptionsObj = {
            imports: {
              
            }
        };

        var template = _.template(inputTemplate, templateOptionsObj);
        if (data) {
            $('#' + id).html(template(data));
        } else {
            $('#' + id).html(template());
        }
    },

    bindEvent: function(id, currEvent, currData, currEventHandler) {
        $('#' + id).on(currEvent, currData, currEventHandler);
    },

    bind: function (id, currEvent, childElement, currData, currEventHandler) {
        $(id).on(currEvent, childElement, currData, currEventHandler);
    },

    bindClassEvent: function(className, currEvent, currData, currEventHandler) {
        $('.' + className).on(currEvent, currData, currEventHandler);
    },

    renderView: function(view, data) {
        view.render(data);
    }
}
