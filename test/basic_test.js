Feature('mvc');

Scenario('test something', (I) => {
		I.amOnPage('/');
		I.dontSeeElement('#todo-count');
		I.fillField({model: 'newTodo'}, 'Write a guide');
		I.pressKey('Enter');
		I.see('Write a guide', {repeater: "todo in todos"});
		I.see('1 item left', '#todo-count');
});
