
(() => {
	if(!$('.table').length)
		return false;

	let local_settigns;

	if (typeof table_settings !== 'undefined') {
		local_settigns = table_settings;
	}else{
		local_settigns = {
	    	bLengthChange : false,
	    	bInfo : false,
	    	searching: false,
	    	autoWidth: true,
	    	paging: false,
		    responsive: {
		        breakpoints: [
		            { name: 'desktop', width: Infinity },
		            { name: 'tablet',  width: 1024 },
		            { name: 'fablet',  width: 768 },
		            { name: 'phone',   width: 480 }
		        ]
		    },
			columnDefs: [
				{ 
					targets: 'no-sort', orderable: false
				}
			], 
		}
	}

    $('.table__container')
    	.DataTable(local_settigns);

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
