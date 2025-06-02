( function( api ) {

	// Extends our custom "personify" section.
	api.sectionConstructor['personify'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );
