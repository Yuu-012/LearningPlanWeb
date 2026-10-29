const params = new URLSearchParams(window.location.search);
const planId = params.get("id");

const planIdInput = document.getElementById("plan-id");
const nameInput = document.getElementById("plan-name");
const startInput = document.getElementById("plan-start");
const endInput = document.getElementById("plan-end");
const stateInput = document.getElementById("plan-state");
const updateForm = document.getElementById("update-plan-form");

// 進入頁面後，取得指定計畫的資料
async function loadPlan() {
    if (!planId) {
        alert("網址中缺少計畫 ID");
        window.location.href = "/index.html";
        return;
    }

    try {
        const plan = await getPlanById(planId);

        planIdInput.value = plan.id;
        nameInput.value = plan.name;
        startInput.value = plan.start;
        endInput.value = plan.end;
        stateInput.value = String(plan.state);
    } catch (error) {
        alert(error.message);
    }
}

// 確認修改
updateForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const updatedPlan = {
        name: nameInput.value,
        start: startInput.value,
        end: endInput.value,
        state: Number(stateInput.value)
    };

    try {
        await updatePlan(planId, updatedPlan);
        alert("計畫修改成功！");
        window.location.href = "/index.html";
    } catch (error) {
        alert(error.message);
    }
});

// 載入頁面時執行
loadPlan();
