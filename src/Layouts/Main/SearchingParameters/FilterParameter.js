import React, { useState, useContext, useEffect } from "react"
import { StyledFilterParameter } from "./Parameters.style"
import { useTranslation } from "react-i18next"
import { useFilterContext } from "../../../Contexts/FilterContext"
import {
	Options,
	Category,
	CategoryTitle,
	Label,
	Checkbox,
} from "./Parameters.style"

const FilterParameter = () => {
	const { filters, handleFilterChange, setOptionsForCategory } =
		useFilterContext()
	const { t } = useTranslation()

	const categories = [
		{
			key: "type",
			title: t("filterParameters.type"),
			options: [
				t("filterParameters.personal"),
				t("filterParameters.bus"),
				t("filterParameters.delivery"),
				t("filterParameters.taxi"),
			],
		},
		{
			key: "gearbox",
			title: t("filterParameters.gearbox"),
			options: [t("filterParameters.manual"), t("filterParameters.auto")],
		},
		{
			key: "rent",
			title: t("filterParameters.rent"),
			options: [t("filterParameters.short"), t("filterParameters.long")],
		},
	]

	return (
		<StyledFilterParameter>
			<Options $isExpanded={true}>
				{categories.map((category, index) => (
					<Category key={index}>
						<CategoryTitle>{category.title}</CategoryTitle>
						{category.options.map((option, optionIndex) => (
							<Label key={optionIndex}>
								<Checkbox
									checked={
										category.key &&
										filters[category.key] &&
										filters[category.key].includes(option)
									}
									onChange={e =>
										handleFilterChange(category.key, option, e.target.checked)
									}
								/>{" "}
								{option}
							</Label>
						))}
					</Category>
				))}
			</Options>
		</StyledFilterParameter>
	)
}

export default FilterParameter
