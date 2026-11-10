// 查詢所有計劃
async function getPlans(){
    const response = await fetch("/plan", {
        method: "GET"
    });

    if (!response.ok)
        throw new Error("查詢計畫失敗");

    return response.json();
}

// 查詢單一計畫
async function getPlan(id) {
    const response = await fetch(`${"plan"}/${id}`, {
        method: "GET"
    });

    if (response.status === 404)
        throw new Error("該編號不存在");
    else if (!response.ok)
        throw new Error("查詢計畫失敗");

    return await response.json();
}

// 新增計畫
async function createPlan(plan) {
    const response = await fetch("plan", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(plan)
    });

    if (!response.ok)
        throw new Error("新增計畫失敗");
}

// 修改計畫
async function updatePlan(id, plan) {
    const response = await fetch(`${"plan"}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(plan)
    });

    if (response.status === 404)
        throw new Error("該編號不存在");
    else if (!response.ok)
        throw new Error("修改計畫失敗");
}

// 刪除計畫
async function deletePlan(id) {
    const response = await fetch(`${"plan"}/${id}`, {
        method: "DELETE"
    });

    if (response.status === 404)
        throw new Error("該編號不存在");
    else if (!response.ok)
        throw new Error("刪除計畫失敗");
}