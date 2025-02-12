const webSocket = new WebSocket("https://basic-chat-app-57al.onrender.com");


const mainContent = document.querySelector("#mainContent");
const btnCreate = document.querySelector("#btnCreate");
const btnJoin = document.querySelector("#btnJoin");

function makeChatWindow() {

    function addNewChat(message) {
        const msg = document.createElement("h6");
        msg.textContent = message;

        const timeStamp = document.createElement("p");
        timeStamp.textContent = "TimeStamp";

        const div = document.createElement("div");
        div.id = "chat";

        div.append(msg);
        div.append(timeStamp);

        showChat.append(div);
    };

    const mainDiv = document.createElement("div");
    mainDiv.id = "chatWindow";

    const showChatDiv = document.createElement("div");
    showChatDiv.id = "showChat";

    mainDiv.append(showChatDiv);

    const newChatInput = document.createElement("input");
    newChatInput.id = "newChat";
    newChatInput.name = "newChat";
    newChatInput.type = "text";

    const addChatButton = document.createElement("button");
    addChatButton.type = "submit";
    addChatButton.id = "btnAdd";
    addChatButton.textContent = "+";

    const addChatForm = document.createElement("form");
    addChatForm.action = "#";
    addChatForm.id = "addChat";

    addChatForm.append(newChatInput);
    addChatForm.append(addChatButton);

    mainDiv.append(addChatForm);

    mainContent.append(mainDiv);


    addChat.addEventListener("submit", (e) => {
        e.preventDefault();
        webSocket.send(JSON.stringify({
            type: "message",
            payload: {
                message: newChat.value
            }
        }));
        newChat.value = "";
    });

    webSocket.addEventListener("message", (evt) => {
        const data = JSON.parse(evt.data);
        if (data.type === "message") {
            addNewChat(data.payload.message);
        }
    });
};

function makeCreateRoom() {
    const newRoomInput = document.createElement("input");
    newRoomInput.id = "newRoom";
    newRoomInput.name = "newRoom";
    newRoomInput.type = "number";

    const addRoomButton = document.createElement("button");
    addRoomButton.type = "submit";
    addRoomButton.id = "btnAddRoom";
    addRoomButton.textContent = "+";

    const addRoomForm = document.createElement("form");
    addRoomForm.action = "#";
    addRoomForm.id = "addNewRoom";

    addRoomForm.append(newRoomInput);
    addRoomForm.append(addRoomButton);

    const title = document.createElement("h3");
    title.id = "createRoomTitle";
    title.textContent = "Create Room";

    mainContent.append(title);
    mainContent.append(addRoomForm);

    addNewRoom.addEventListener("submit", (e) => {
        e.preventDefault();

        webSocket.send(JSON.stringify({
            type: 'join',
            payload: {
                roomId: newRoom.value
            }
        }));

        const room = document.createElement("h5");
        room.id = "roomTitle";
        room.textContent = `Room Id - ${newRoom.value}`;

        mainContent.removeChild(document.querySelector("#createRoomTitle"));
        mainContent.removeChild(document.querySelector("#addNewRoom"));

        mainContent.append(room);

        makeChatWindow();

    });

    mainContent.removeChild(document.querySelector("#startBtns"));
};

function makeJoinRoom() {
    const joinRoomInput = document.createElement("input");
    joinRoomInput.id = "joinRoom";
    joinRoomInput.name = "joinRoom";
    joinRoomInput.type = "number";

    const joinRoomButton = document.createElement("button");
    joinRoomButton.type = "submit";
    joinRoomButton.id = "btnJoinRoom";
    joinRoomButton.textContent = "+";

    const joinRoomForm = document.createElement("form");
    joinRoomForm.action = "#";
    joinRoomForm.id = "joinNewRoom";

    joinRoomForm.append(joinRoomInput);
    joinRoomForm.append(joinRoomButton);

    const title = document.createElement("h3");
    title.id = "joinRoomTitle";
    title.textContent = "Join Room";

    mainContent.append(title);
    mainContent.append(joinRoomForm);

    joinNewRoom.addEventListener("submit", (e) => {
        e.preventDefault();

        webSocket.send(JSON.stringify({
            type: 'join',
            payload: {
                roomId: joinRoom.value
            }
        }));

        const room = document.createElement("h5");
        room.id = "roomTitle";
        room.textContent = `Room Id - ${joinRoom.value}`;

        mainContent.removeChild(document.querySelector("#joinRoomTitle"));
        mainContent.removeChild(document.querySelector("#joinNewRoom"));

        mainContent.append(room);

        makeChatWindow();

    });

    mainContent.removeChild(document.querySelector("#startBtns"));
};

webSocket.addEventListener("open", () => {
    btnCreate.addEventListener("click", () => {
        makeCreateRoom();
    });

    btnJoin.addEventListener("click", () => {
        makeJoinRoom();
    });
});

webSocket.addEventListener("close", () => {
    alert("Unable to connect to the server!!!");
})

