(() => {
    $(function() {
        $('#addNew').on('click', e => {
            e.preventDefault();
            let data = {
                burger_name: $('#burger-name').val()
            };
            console.log(data)
            $.ajax('api/burgers', {
                type: 'POST',
                data: data,
                success: result => {
                    console.log(result);
                    location.reload();
                }
            });
        });

        $(".devour").on("click", e => {
            $.ajax("/api/burgers/" + $(e.target).data("id"), {
                type: "PUT",
                data: { devoured: $(e.target).data("devoured") }
            }).then(data => location.reload());
        });

    });
})();
