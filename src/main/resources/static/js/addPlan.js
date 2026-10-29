const planForm = document.getElementById("add-plan-form");
const planName = document.getElementById("plan-name");
const planStart = document.getElementById("plan-start");
const planEnd = document.getElementById("plan-end");
const planState = document.getElementById("plan-state");

// 新增計畫
planForm.addEventListener("submit", async event => {
    event.preventDefault();

    const name = planName.value.trim();
    const startDay = planStart.value.trim();
    const endDay = planEnd.value.trim();
    const stateString = planState.value.trim();
    const state = (stateString === "是") ? 1 : 0;

    if (!name || !startDay || !endDay || !stateString) {
        return "沒有接收輸入";
    }

    try {
        await createPlan({ name: name, start: startDay,
            end: endDay, state: state    });
        planName.value = "";
        planStart.value = "";
        planEnd.value = "";
        planState.value = "";
    } catch (error) {
        alert(error.message);
    }
});