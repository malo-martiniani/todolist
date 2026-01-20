import React, { useState } from 'react';

function TodoForm({ onAdd }) {
	const [inputValue, setInputValue] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		const value = inputValue.trim();
		if (!value) return;
		if (typeof onAdd === 'function') {
			onAdd(value);
		}
		setInputValue('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text" 
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="New task"
			/>
			<button type="submit">Add</button>
		</form>
	);
}

export default TodoForm;
