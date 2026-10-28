const planForm = document.getElementById("plan-form");
const planName = document.getElementById("plan-name");
const planStart = document.getElementById("plan-start");
const planEnd = document.getElementById("plan-end");
const planState = document.getElementById("plan-state");
const planList = document.getElementById("plan-list");

// 將所有計畫顯示在表格
function renderPlan(plans) {
    planList.replaceChildren();

    plans.forEach(plan => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = plan.id;

        const nameCell = document.createElement("td");
        nameCell.textContent = plan.name;

        const startCell = document.createElement("td");
        startCell.textContent = plan.start;

        const endCell = document.createElement("td");
        endCell.textContent = plan.end;

        const stateCell = document.createElement("td");
        if (plan.state === 1)
            stateCell.textContent = "是";
        else
            stateCell.textContent = "否";

        row.append(idCell, nameCell, startCell, endCell, stateCell);
        planList.appendChild(row);
    });
}

// 從後端載入所有計畫
async function loadPlans() {
    try {
        const plans = await getPlans();
        renderPlan(plans);
    } catch (error) {
        alert(error.message);
    }
}

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

        await loadPlans();
    } catch (error) {
        alert(error.message);
    }
});

// 網頁載入後，取得計畫清單
loadPlans();