$(function() {
	$.ajax({
		url: 'https://www.codeschool.com/users/carlosgorrin.json',
		dataType: 'jsonp',
		success: function(response) {
		// handle response
		console.log('response', response.courses.completed);

		addCourses(response.courses.completed); // call addCourses and pass in json 
		}
	});

	function addCourses(courses) {

		var $badges = $('#badges'); //badges variable

		courses.forEach(function(course) { // start loop
			var $course = $('<div />', { // create div
				'class' : "course"  // add class
			}).appendTo($badges); // append to id badges

		$('<h3 />', {
			text: course.title
		}).appendTo($course);

		$('<img />', {
			src: course.badge,
			title: course.title
		}).appendTo($course);

		$('<a />', {
			href: course.url,
			target: '_blank',
			class: 'btn btn-primary',
			text: "Go to Course"
		}).appendTo($course);
	});

	}


});