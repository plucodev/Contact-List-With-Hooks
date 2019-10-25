const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiContacts: [],
			localContacts: [
				{
					name: "Paolo",
					email: "pluco@gmail.com",
					address: "123 Lincoln rd",
					phone: "123456"
				}
			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},

		actions: {
			addANewContact: (name, email, address, phone, saveLocation, history) => {
				let store = getStore();
				console.log("CLICK", store);
				// This method will receive name, address, phone and email from addContact view
				// and it will post to the backend or to the store
				saveLocation === "store"
					? setStore({
							localContacts: store.localContacts.concat({
								name: name,
								email: email,
								address: address,
								phone: phone
							})
					  })
					: fetch("https://3000-e7d09907-b998-4b3a-99be-2cbe0a8687b8.ws-us1.gitpod.io/person", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								name: name,
								email: email,
								address: address,
								phone: phone
							})
					  })
							.then(() => {
								fetch("https://3000-e7d09907-b998-4b3a-99be-2cbe0a8687b8.ws-us1.gitpod.io/person")
									.then(response => response.json())
									.then(data => {
										setStore({ apiContacts: data });
									});
							})

							.then(() => history.push("/contacts/api"));
			},
			editContact: (name, email, address, phone, saveLocation, index) => {
				let store = getStore();
				let updated_store = store.localContacts
					.slice(0, index)
					.concat({
						...store.localContacts[index],
						name: name,
						email: email,
						address: address,
						phone: phone
					})
					.concat(store.localContacts.slice(index + 1));
				console.log("Upd", updated_store);
				setStore({ localContacts: updated_store });
				// saveLocation === "store"
				// 	? setStore({
				// 			localContacts: store.localContacts.splice(index, 1, {
				// 				...store[index],
				// 				name: name,
				// 				email: email,
				// 				address: address,
				// 				phone: phone
				// 			})
				// 	  })
				// 	: console.log("api:", name, email, address, phone).then(() => history.push("/"));
			},
			deleteContact: index => {
				let store = getStore();
				console.log("index", index);
				setStore({ localContacts: store.localContacts.filter((item, index) => index !== index) });
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
