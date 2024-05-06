import i18next from "i18next"

export const mainContract = (companyName) => {
    return [
        {
            title:i18next.t('app.pages.beforeTheEnd.infoCheck1'),
            body: `
                Bu uygulama, ${companyName}'nı kullanarak hesabınıza erişmek ve belirli bilgilere erişim sağlamak için yetkilendirilmektedir. ${companyName}'nı kullanarak hesabınızı bağlamadan önce, lütfen aşağıdaki kullanım şartlarını ve gizlilik politikasını dikkatlice okuyunuz.
                Bu uygulamanın kullanımı, ${companyName}'nın kullanım şartları ve gizlilik politikasına tabidir. ${companyName}'nın kullanım şartları ve gizlilik politikasını kabul etmek suretiyle, bu uygulamanın belirlediği amaçlar doğrultusunda hesabınızı kullanabilecek ve belirli bilgilere erişebileceğinizi kabul etmiş olursunuz.
            `
        },
        {
            title:i18next.t('app.pages.beforeTheEnd.infoCheck2'),
            body: `
                Bu uygulama, ${companyName}'nı kullanarak hesabınıza belirli yetkileri ve erişim düzeylerini sağlamak için yetkilendirilmektedir. Bu izinler çerçevesinde, bu uygulama tarafından belirli işlevlere ve verilere erişim sağlama talebinde bulunabiliriz.
                ${companyName} ile hesabınızı bağladığınızda, bu uygulamanın belirli yetkileri ve erişim düzeylerine sahip olacağını kabul etmiş olursunuz. Bu yetkiler ve erişim düzeyleri, bu uygulamanın sağladığı hizmetlerin gerçekleştirilmesi için gereklidir ve bu uygulamanın belirlediği amaçlar doğrultusunda kullanılacaktır.
                    
            `
        
        },
        {
            title:i18next.t('app.pages.beforeTheEnd.infoCheck3'),
            body: `
                Bu uygulama, ${companyName}'nı kullanarak hesabınıza erişmek ve belirli bilgilere erişim sağlamak için yetkilendirilmektedir. Bu izinler çerçevesinde, bu uygulama tarafından belirli bilgilerinize erişme ve bu bilgileri kullanma talebinde bulunabiliriz.
                ${companyName} ile hesabınızı bağladığınızda, ad, e-posta adresi, profil resmi gibi belirli bilgilerinizin bu uygulama tarafından erişilebilir olacağını kabul etmiş olursunuz. Bu bilgilerin gizliliğini korumak ve güvenliğini sağlamak için gerekli tüm önlemleri alacağız ve bu bilgileri yalnızca bu uygulamanın sağladığı hizmetlerle ilişkilendirilmesi için kullanacağız.
                    
            `
        }
    ]
}