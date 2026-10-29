const planList = document.getElementById("plan-list");

// 將所有計畫顯示在表格
function renderPlan(plans) {
    planList.replaceChildren();

    plans.forEach(plan => {
        const row = document.createElement("tr");

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

        const actionCell = document.createElement("td");

        const updateBtn = document.createElement("button");
        updateBtn.textContent = "修改計畫";

        updateBtn.addEventListener("click", () => {
            window.location.href =
                `/updatePlan.html?id=${encodeURIComponent(plan.id)}`;
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "刪除計畫"

        deleteBtn.addEventListener("click", async() => {
            const confirmDelete = confirm( `請問是否要刪除「${plan.name}」計畫`);
            if (confirmDelete) {
                try{
                    await deletePlan(plan.id);
                    await loadPlans();
                }catch (error){
                    alert(error.message);
                }
            }
        })

        actionCell.appendChild(updateBtn);
        actionCell.appendChild(deleteBtn);

        row.append( nameCell, startCell, endCell, stateCell, actionCell);
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

// 網頁載入後，取得計畫清單
loadPlans();