
(() => {
	if(!$('.table').length)
		return false;

    $('.table__container')
    	.DataTable({
    	bLengthChange : false,
    	bInfo : false,
    	searching: false,
    	autoWidth: true,
	    responsive: {
	        breakpoints: [
	            { name: 'desktop', width: Infinity },
	            { name: 'tablet',  width: 1024 },
	            { name: 'fablet',  width: 768 },
	            { name: 'phone',   width: 480 }
	        ]
	    },
        // rowReorder: {
        //     selector: 'td:nth-child(2)'
        // },
        // responsive: true,
		columnDefs: [
			{ 
				targets: 'no-sort', orderable: false
			},
			// {
			// 	className: "col-sku", targets: 0
			// },
			// {
			// 	className: "col-name", "targets": 1
			// },
			// {
			// 	className: "col-pa_fasovka", "targets": 2
			// },
			// {
			// 	className: "col-pa_upakovka", "targets": 3
			// },
			// {
			// 	className: "col-pa_proizvoditel", "targets": 4
			// },
			// {
			// 	className: "col-price", "targets": 5
			// },
			// {
			// 	type: "html", "targets": 0
			// },
			    
		    // { className: 'all', targets: 1 },       //Show on all devices
		    // { className: 'never', targets: 2 },
		    // { className: 'all', targets: 3 },
		    // { className: 'all', targets: 4 },
		    // { className: 'all', targets: 5 },
		    // { className: 'min-mobile', targets: 'dont-hide' },    //Hide on mobile    
		    // { className: 'my-phone', targets: 'hide-mobile' },    //Hide on mobile    

		    // min-tablet

		],
		// "dom":"<\"wc-product-table-wrapper thegem\"<\"wc-product-table-above wc-product-table-controls\">t>",
		// drawCallback: function(oSettings) {
		// 	console.log("drawCallback",oSettings)
		// 	let button = $(oSettings.nTable).closest('.table').find('.js-table-more')
		// 	if(button.is(':visible')){
		// 		$('html, body').animate({
		// 			scrollTop: button.offset().top
		// 		}, 1000);
		// 	}
		// 	// button.toggle(this.api().page.hasMore());
		// },
		fnDrawCallback: (oSettings) => {
			let tbl = $(oSettings.nTable).DataTable();
			if (tbl.rows().count() < 11) {
				$(oSettings.nTable).closest('.table').removeClass('table_nav')
				$(oSettings.nTableWrapper)
					.find('.dataTables_paginate').hide();
			}else{
				$(oSettings.nTable).closest('.table').addClass('table_nav')
			}
		}    	
    });

    $('.js-table-more').on('click', e => {
    	let tbl = $(e.currentTarget).closest('.table').find('.table__container').DataTable();
    	tbl.page.loadMore();
    })

    $('.js-mobile-list').on('click', e => {
    	let $this = $(e.currentTarget);

    	$this.closest('tr').find('.parent').trigger('click')

    	$this.toggleClass('is-active')

    	if($this.hasClass('is-active')){
    		$this.text('Свернуть')
    	}else{
			$this.text('Развернуть')
    	}
    })
})($);
