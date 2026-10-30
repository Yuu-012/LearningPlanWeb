const planForm = document.getElementById("add-plan-form");
const planName = document.getElementById("plan-name");
const planStart = document.getElementById("plan-start");
const planEnd = document.getElementById("plan-end");
const planState = document.getElementById("plan-state");

// 新增計畫
planForm.addEventListener("submit", async event => {
    event.preventDefault();

    const name = planName.value.trim();
    const start = planStart.value;
    const end = planEnd.value;
    const stateString = planState.value;
    const state = (stateString === "是") ? 1 : 0;

    if (!name || !start || !end || !stateString) {
        alert("資料未填寫完整");
        return;
    }

    const newPlan = {
        name: name,
        start: start,
        end: end,
        state: state
    }

    try {
        await createPlan(newPlan);
        planName.value = "";
        planStart.value = "";
        planEnd.value = "";
        planState.value = "";
        alert("新增計畫成功！");
    } catch (error) {
        alert(error.message);
    }
});