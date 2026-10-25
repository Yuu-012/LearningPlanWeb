const planForm = document.getElementById("plan-form");
const planTitle = document.getElementById("plan-title");
const planList = document.getElementById("plan-list");

// 將任務顯示在表格
function renderPlans(plans) {
    planList.replaceChildren();

    plans.forEach(plan => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = plan.id;

        const titleCell = document.createElement("td");
        titleCell.textContent = plan.title;

        const startCell = document.createElement("td");
        startCell.textContent = plan.start;

        const endCell = document.createElement("td");
        endCell.textContent = plan.end;

        const stateCell = document.createElement("td");
        stateCell.textContent = plan.state;

        row.append(idCell, titleCell, startCell, endCell, stateCell);
        planList.appendChild(row);
    });
}

// 從後端載入任務
async function loadPlan(id) {
    try {
        const plan = await getPlan(id);
        renderPlans(plan);
    } catch (error) {
        alert(error.message);
    }
}

// 新增任務
planForm.addEventListener("submit", async event => {
    event.preventDefault();

    const title = planTitle.value.trim();

    if (!title) {
        return;
    }

    try {
        await createPlan({ title: title });

        planTitle.value = "";
        await loadPlan();
    } catch (error) {
        alert(error.message);
    }
});

// 網頁載入後，取得任務清單
loadPlan();