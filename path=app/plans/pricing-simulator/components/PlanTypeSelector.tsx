<h4 className="text-xl font-medium text-gray-900 mb-6">ステップ1: プランタイプを選択</h4>

<Card
  key={planType.id}
  className={cn(
    "cursor-pointer transition-all duration-200 hover:shadow-md bg-white",
    selectedPlan === planType.id
      ? "border-gray-300 shadow-lg"
      : "border-gray-200 hover:border-gray-300"
  )}
>
  <CardContent className="p-6">
    <div className="flex justify-between items-center mb-4">
      <Badge className="bg-gray-50 text-gray-800 border border-gray-200">
        {planType.name}
      </Badge>
      {selectedPlan === planType.id && (
        <div className="h-6 w-6 rounded-full bg-gray-600 flex items-center justify-center">
          <Check className="h-4 w-4 text-white" />
        </div>
      )}
    </div>
    <h5 className="text-lg font-medium text-gray-900 mb-2">
      {planType.id === "fe" ? "家族向け体験プラン" : "ワーケーション向けプラン"}
    </h5>
    <p className="text-gray-700 text-sm leading-relaxed">
      {planType.description}
    </p>
  </CardContent>
</Card>

<Button
  onClick={onNext}
  disabled={!selectedPlan}
  className={cn(
    "px-6 transition-colors",
    selectedPlan
      ? "bg-gray-600 hover:bg-gray-700 text-white shadow-md"
      : "bg-gray-50 text-gray-400 cursor-not-allowed border border-gray-200"
  )}
>
  次へ
  <ChevronRight className="ml-2 h-4 w-4" />
</Button> 