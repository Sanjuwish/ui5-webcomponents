commit dbdf625a49b391028a7ff92d0a9c68a4f4bdd3da
Author: Tsanislav Gatev <tsanislav.gatev@sap.com>
Date:   Wed Mar 15 09:54:35 2023 +0200

    fix(ui5-split-button): align styles in icon only mode (#6697)
    
    Solution: We don't create slot for text if we don't have text.
    fixes: #6688
