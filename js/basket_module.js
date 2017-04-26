var BasketService = function() {
};

BasketService.prototype = {
    runAjax : function(data, callback) {
        var url = '/application/cart/' + data.type;
        $.ajax({
            data: data,
            dataType: 'json',
            method: 'post',
            url: url,
            success: callback
        })
    },

    addItem: function(id, count, callback) {
        this.runAjax({id:id, count: count, type:'add-item' }, callback);
    },

    addItems: function(data, callback) {
        this.runAjax({data:data, type:'add-items' }, callback);
    },

    removeItem: function(id, callback) {
        this.runAjax({id:id, type:'remove-item'}, callback);
    },

    clear: function(callback) {
        this.runAjax({type:'clear'}, callback);
    },

    info: function(callback) {
        this.runAjax({type:'info'}, callback);
    }
};

var BasketModule = new BasketService();
