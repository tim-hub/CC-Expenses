<template>
  <q-layout-footer>
      <!-- content; any -->
      <q-tabs position="bottom"
      >
        <q-route-tab
          icon="attach_money"
          to="/"
          exact
          slot="title"
          label="Transact"
        />
        <q-route-tab
          width="100px"
          icon="account_balance_wallet"
          to="/create"
          exact
          slot="title"
          label="  Balance "
        />

        <q-route-tab
          icon="bar_chart"
          to="/create"
          exact
          slot="title"
          label="   Goal👍"
        />
      </q-tabs>
    </q-layout-footer>
</template>
<script>
export default {
  name: 'ExpenseFooter'
}
</script>
