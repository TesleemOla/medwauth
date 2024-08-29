export interface tableNav{
    item: String,
    createLink: string | URL
}

export interface fetchAllData {
    token: string,
    item: string
}

export interface Drugdata {
    categoryId: String,
    drugDescription: String,
    drugName: String,
    noInPackage: number,
    packageType: String,
    productId: String,
    reOrderLevel: number,
    scientificName: String,
    treatmentUsedFor: String,
    _id: number,
}



export interface DrugDataHeadings {
    categoryId: String,
    drugDescription: String,
    drugName: String,
    noInPackage: String,
    packageType: String,
    productId: String,
    reOrderLevel: String,
    scientificName: String,
    treatmentUsedFor: String,
    _id: String
}

export interface CategoryData{
    _id: String,
    name: String,
    description: String
}

export interface ClientData{
    _id: Object,
    customerName: String,
        contactEmail: String,
            phoneNumber: String,
                officeAddress: String,
                    city: String,
                        state: String,
                            adminId: number|string | Object
    
}

